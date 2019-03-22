import React from 'react';
import { FiSearch, FiRadio } from 'react-icons/fi';
import { FaShoppingBag, FaUserCircle, FaHome } from 'react-icons/fa';
import { keycodes } from '../constants';
import railItemImage from '../images/bbb-19-logo.jpg';
import highlightBg from '../images/tiago-leifert-o-bbb19.jpg';

const CHANGE_HIGHLIGHT = 'CHANGE_HIGHLIGHT'
const FOCUS_RAIL_ITEM = 'FOCUS_RAIL_ITEM'
const CHANGE_BACKGROUND_IMAGE = 'CHANGE_BACKGROUND_IMAGE'

const INITIAL_STATE = {
  sidebarItems: [
    {
      label: "Busca",
      icon: <FiSearch />
    },
    {
      label: "Início",
      icon: <FaHome />
    },
    {
      label: "Agora na Globo",
      icon: <FiRadio />
    },
    {
      label: "Categorias",
      icon: <FaShoppingBag />
    },
    {
      label: "Minha conta",
      icon: <FaUserCircle />
    }
  ],
  railItems: [
    {
      category: "Realities",
      show: 'Big Brother Brasil',
      title: "Sala de estar",
      image: railItemImage
    },
    {
      category: "Realities",
      show: 'Big Brother Brasil',
      title: "Varanda",
      image: railItemImage
    },
    {
      category: "Realities",
      show: 'Big Brother Brasil',
      title: "Piscina",
      image: railItemImage
    },
    {
      category: "Realities",
      show: 'Big Brother Brasil',
      title: "Academia",
      image: railItemImage
    },
    {
      category: "Realities",
      show: 'Big Brother Brasil',
      title: "Chuveiro",
      image: railItemImage
    }
  ],
  highlighted: 'headline',
  focusedRailItem: {
    show: '',
    title: ''
  },
  background: {
    image: highlightBg,
    fade: false
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_HIGHLIGHT:
      return {
        ...state,
        highlighted: action.payload
      }
    case FOCUS_RAIL_ITEM:
      return {
        ...state,
        focusedRailItem: action.payload
      }
    case CHANGE_BACKGROUND_IMAGE:
      return {
        ...state,
        background: {
          ...state.background,
          ...action.payload
        }
      }
    default:
      return state
  }
}

export const sidebarNavigation = () => {
  const items = document.querySelectorAll('.sidebar-item')

  return (dispatch, getState) => {
    items.forEach(item => {
      item.addEventListener('keydown', event => {
        const index = item.getAttribute('index')
  
        switch (event.keyCode) {
          case keycodes.down:
            const nextSibling = document.querySelector(`#sidebar-item-${parseInt(index) + 1}`)
            nextSibling && nextSibling.focus()
            break
          case keycodes.up:
            const prevSibling = document.querySelector(`#sidebar-item-${parseInt(index) - 1}`)
            prevSibling && prevSibling.focus()
            break
          case keycodes.right:
            const { highlighted } = getState()
            const firstHighlightBtn = document.querySelector(`main #${highlighted} button`)
            firstHighlightBtn.focus()
            break
          default:
            break
        }
      })
    })
  }
}

export const highlightNavigation = () => {
  const buttons = document.querySelectorAll('main .highlight button')
  buttons[0].focus()

  buttons[0].addEventListener('keydown', event => {
    switch (event.keyCode) {
      case keycodes.right: 
        buttons[1].focus()
        break
      case keycodes.left:
        document.querySelector('.sidebar-item').focus()
        break
      default:
        break
    }
  })

  buttons[1].addEventListener('keydown', event => {
    if (event.keyCode === keycodes.left) {
      buttons[0].focus()
    }
  })

  return dispatch => {
    buttons.forEach(btn => {
      btn.addEventListener('keydown', event => {
        if (event.keyCode === keycodes.down) {
          const firstRailItem = document.querySelector('.rail-item')
          firstRailItem.focus()
        }
      })
    })
  }
}

export const railNavigation = () => {
  const items = document.querySelectorAll('.rail-item')
  
  return (dispatch, getState) => {
    items.forEach(item => {
      item.addEventListener('keydown', event => {
        const index = item.getAttribute('index')

        switch (event.keyCode) {
          case keycodes.right:
            const nextSibling = document.querySelector(`#rail-item-${parseInt(index) + 1}`)
            nextSibling && nextSibling.focus()
            break
          case keycodes.left:
            if (parseInt(index) === 0) {
              const firstSidebarItem = document.querySelector('#sidebar-item-0')
              firstSidebarItem.focus()
            }

            const prevSibling = document.querySelector(`#rail-item-${parseInt(index) - 1}`)
            prevSibling && prevSibling.focus()
            break
          case keycodes.up:
            dispatch(changeHighlight('headline'))
            const firstHighlightBtn = document.querySelector('main button')
            firstHighlightBtn.focus()
            break
          default:
            break
        }
      })

      item.addEventListener('focus', () => {
        dispatch(changeHighlight('rail'))

        const focusedRailItemIndex = parseInt(document.activeElement.id.replace('rail-item-', ''))
        const { show, image, title } = getState().railItems[focusedRailItemIndex]

        dispatch({
          type: FOCUS_RAIL_ITEM,
          payload: { show, title }
        })

        dispatch(bgChange(image))
      })
    })
  }
}

export const changeHighlight = (highlight) => {
  return dispatch => {
    dispatch({
      type: CHANGE_HIGHLIGHT,
      payload: highlight
    })

    if (highlight === 'headline') {
      dispatch({
        type: FOCUS_RAIL_ITEM,
        payload: INITIAL_STATE.focusedRailItem
      })

      dispatch(bgChange(highlightBg))
    }
  }
}

export const bgChange = (image) => {
  return dispatch => {
    dispatch({
      type: CHANGE_BACKGROUND_IMAGE,
      payload: { fade: true }
    })

    setTimeout(() => dispatch({
      type: CHANGE_BACKGROUND_IMAGE,
      payload: { image }
    }), 300)

    setTimeout(() => dispatch({
      type: CHANGE_BACKGROUND_IMAGE,
      payload: { fade: false }
    }), 600)
  }
}