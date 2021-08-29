import styles from './Emoji.module.css';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';


const Emoji = () => {

  const onEmojiSelect = (emoji) => {
    console.log('emoji', emoji)
  }

  return (
    <Picker
      onEmojiClick={onEmojiSelect}
      disableAutoFocus={true}
      pickerStyle={{ width: '100%', height: '800px', boxShadow: 'none', border: 'none' }}
      skinTone={SKIN_TONE_MEDIUM_DARK}
      groupNames={{ smileys_people: 'PEOPLE' }}
      native
    />
  )
}

export default Emoji;