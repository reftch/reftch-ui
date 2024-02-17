import './globals.css'
import '@reftch-ui/ui'
import './layout/home.element'

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
