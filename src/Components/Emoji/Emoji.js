import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
import styles from './Emoji.module.scss';

const Emoji = () => {

  const copyToClipboard = (event, emoji) => {

    const trigger = event.currentTarget;

    const textToCopy = emoji
    const editable = document.createElement('textarea');
    editable.textContent = textToCopy;
    document.body.appendChild(editable);
    editable.select();
    document.execCommand('Copy');
    document.body.removeChild(editable);

    trigger.classList.add(styles.flash);
    setTimeout(function() {
      trigger.classList.remove(styles.flash);
    }, 800)
  }

  const onEmojiSelect = (event, chosenEmoji) => {
    copyToClipboard(event, chosenEmoji.emoji)
  }

  return (
    <Picker
      onEmojiClick={onEmojiSelect}
      disableAutoFocus={true}
      pickerStyle={{ width: '100%', height: '100%', boxShadow: 'none', border: 'none' }}
      skinTone={SKIN_TONE_MEDIUM_DARK}
      groupNames={{ smileys_people: 'PEOPLE' }}
      native
    />
  )
}

export default Emoji;