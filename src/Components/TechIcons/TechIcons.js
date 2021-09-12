import IconWrapper from '../UI/IconWrapper/IconWrapper';
import techIcons from '../../data/icons.json';

const TechIcons = () => {
  return (
    <IconWrapper styleName='wise_icon--tech' data={techIcons} />
  )
}

export default TechIcons;