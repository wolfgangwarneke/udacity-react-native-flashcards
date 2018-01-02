import { Platform } from 'react-native'

const iosFont = "Trebuchet MS"
const androidFont = "Roboto"

export default function fontPicker () {
  return Platform.OS === 'ios' ? iosFont : androidFont
}
