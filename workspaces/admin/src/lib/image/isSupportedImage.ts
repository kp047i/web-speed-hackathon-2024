import { fileTypeFromBuffer } from 'file-type';

const SUPPORTED_MAGIKA_LABEL_LIST = ['bmp', 'jpeg', 'png', 'webp'];
const SUPPORTED_MIME_TYPE_LIST = ['image/bmp', 'image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/jxl'];

function getFileExtension(file: File): string {
  return file.name.split('.').pop() ?? '';
}

export async function isSupportedImage(image: File): Promise<boolean> {
  const extension = getFileExtension(image);

  if (SUPPORTED_MAGIKA_LABEL_LIST.includes(extension)) {
    return true;
  }

  const fileType = await fileTypeFromBuffer(await image.arrayBuffer());
  if (SUPPORTED_MIME_TYPE_LIST.includes(fileType?.mime ?? '')) {
    return true;
  }

  return false;
}
