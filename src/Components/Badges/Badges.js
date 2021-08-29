import IconWrapper from '../UI/IconWrapper/IconWrapper';
import badgeData from '../../Data/badges.json';

const Badges = () => {
  return (
    <IconWrapper data={badgeData} />
  )
}

export default Badges;