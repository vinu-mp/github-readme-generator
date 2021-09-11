import IconWrapper from '../UI/IconWrapper/IconWrapper';
import techIcons from '../../data/icons.json';

const TechIcons = () => {
  // const setIconSrc = (icons) => {
  //   let final = {}
  //   Object.keys(icons).forEach(item => {
  //     // final[]
  //   })
  //   console.log('icons', icons);
  // }

  return (
    // <div data={setIconSrc(techIcons)}></div>
    <IconWrapper data={techIcons} />
  )
}

export default TechIcons;