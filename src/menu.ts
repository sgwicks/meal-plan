import * as menuItems from './menuItems'

const menu: Menu = []

let menuItem: keyof typeof menuItems

for (menuItem in menuItems) {
  menu.push(menuItems[menuItem])
}

export default menu