import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      primary_hover: string
      secondary: string
      background: string
      button_background: string
      text: string
      text_light: string
    }
  }
}
