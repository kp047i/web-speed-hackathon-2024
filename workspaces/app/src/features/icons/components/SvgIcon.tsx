import ArrowBack from '@mui/icons-material/ArrowBack';
import Close from '@mui/icons-material/Close';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import NavigateNext from '@mui/icons-material/NavigateNext';
import Search from '@mui/icons-material/Search';

type Props = {
  color: string;
  height: number;
  type: 'NavigateNext' | 'Close' | 'Favorite' | 'FavoriteBorder' | 'Search' | 'ArrowBack';
  width: number;
};

export const SvgIcon: React.FC<Props> = ({ color, height, type, width }) => {
  // eslint-disable-next-line
  // return <Icon style={{ color, height, width }} />;
  switch (type) {
    case 'ArrowBack':
      return <ArrowBack style={{ color, height, width }} />;
    case 'Close':
      return <Close style={{ color, height, width }} />;
    case 'Favorite':
      return <Favorite style={{ color, height, width }} />;
    case 'FavoriteBorder':
      return <FavoriteBorder style={{ color, height, width }} />;
    case 'NavigateNext':
      return <NavigateNext style={{ color, height, width }} />;
    case 'Search':
      return <Search style={{ color, height, width }} />;
  }
};
