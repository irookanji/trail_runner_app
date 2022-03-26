import Wool_Runner from '../../../assets/Wool_Runner.png';
import Tree_Runner from '../../../assets/Tree_Runner.png';
import Wool_Runner_Mizzle from '../../../assets/Wool_Runner_Mizzle.png';
import Cloud from '../../../assets/cloud.svg';
import Breezy from '../../../assets/breezy.svg';
import Rainy from '../../../assets/rainy.svg';

export const itemData: { img: string, title: string, icon: string, description: string }[] = [
  {
    img: Wool_Runner,
    title: 'Wool Runner',
    icon: Cloud,
    description: 'Cozy Sneaker',
  },
  {
    img: Tree_Runner,
    title: 'Tree Runner',
    icon: Breezy,
    description: 'Light and Breezy Sneaker',
  },
  {
    img: Wool_Runner_Mizzle,
    title: 'Wool Runner Mizzle',
    icon: Rainy,
    description: 'Rain Ready Sneaker',
  },
];
