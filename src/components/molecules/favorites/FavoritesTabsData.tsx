import woolRunner from '../../../assets/Wool_Runner.png';
import treeRunner from '../../../assets/Tree_Runner.png';
import woolRunnerMizzle from '../../../assets/Wool_Runner_Mizzle.png';
import Cloud from '../../../assets/cloud.svg';
import Breezy from '../../../assets/breezy.svg';
import Rainy from '../../../assets/rainy.svg';

export const itemData: { img: string, title: string, icon: string, description: string }[] = [
  {
    img: woolRunner,
    title: 'Wool Runner',
    icon: Cloud,
    description: 'Cozy Sneaker',
  },
  {
    img: treeRunner,
    title: 'Tree Runner',
    icon: Breezy,
    description: 'Light and Breezy Sneaker',
  },
  {
    img: woolRunnerMizzle,
    title: 'Wool Runner Mizzle',
    icon: Rainy,
    description: 'Rain Ready Sneaker',
  },
];
