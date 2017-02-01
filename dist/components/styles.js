'use strict';

module.exports = {
  // CustomGraphiQL
  container: {
    height: '100%',
    margin: 0,
    width: '100%',
    overflow: 'hidden'
  },
  toolBarButtons: {
    display: 'flex',
    flexDirection: 'row'
  },

  // Common
  shadowButton: {
    padding: '3px 16px',
    fontSize: '14px',
    lineHeight: '20px',
    height: '32px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    color: '#333',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    userSelect: 'none',
    backgroundColor: '#eee',
    backgroundImage: 'linear-gradient(#fcfcfc, #eee)',
    border: '1px solid #d5d5d5',
    borderRadius: '5px',
    fontFamily: 'Helvetica'
  },
  toolBarButtonWrapper: {
    position: 'relative'
  },

  // GraphiQL menu popup
  popup: {
    position: 'absolute',
    top: '100%',
    left: 0,
    zIndex: 100,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 2,
    marginLeft: 5,
    backgroundColor: '#f8f8f8',
    backgroundClip: 'padding-box',
    border: '1px solid rgba(0,0,0,0.15)',
    borderRadius: 4,
    boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
    maxHeight: 385,
    overflowY: 'auto'
  },

  // Search bar
  searchInput: {
    margin: '8px',
    padding: '0px 8px',
    width: '250px',
    minHeight: '28px',
    fontSize: '14px',
    backgroundColor: 'white',
    color: '#333',
    verticalAlign: 'middle',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 8px center',
    border: '1px solid #ddd',
    borderRadius: '5px',
    outline: 'none',
    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.075)',
    fontFamily: 'Helvetica'
  },
  searchInputFocused: {
    border: '1px solid #51a7e8',
    outline: 'none',
    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.075),0 0 5px rgba(81,167,232,0.5)'
  },

  // Menu list button
  menuListButton: {
    display: 'block',
    padding: '8px 8px 8px 30px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    fontSize: '13px',
    fontFamily: 'Helvetica',
    borderBottom: '1px solid #eee',
    backgroundColor: 'white',
    color: '#666'
  },

  // TopBar
  topBar: {
    width: '100%',
    padding: '10px 100px',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #e5e5e5',
    display: 'flex',
    flexDirection: 'row',
    height: '53px',
    boxSizing: 'border-box'
  },
  urlInputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    lineHeight: '25px',
    color: '#767676',
    backgroundColor: '#fff',
    backgroundRepeat: 'noRepeat',
    backgroundPosition: 'right 8px center',
    border: '1px solid #d5d5d5',
    borderRadius: '5px 0px 0px 5px',
    outline: 'none',
    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.075)'
  },
  urlInputWrapperFocused: {
    border: '1px solid #51a7e8',
    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.075),0 0 5px rgba(81,167,232,0.5)',
    color: '#4078c0',
    backgroundColor: '#edf2f9'
  },
  urlInputWrapperError: {
    color: '#b00',
    backgroundImage: 'linear-gradient(#fdf3f3, #e6d6d7)',
    border: '1px solid rgba(187, 0, 0, 0.4)'
  },
  urlInputLabel: {
    paddingRight: '12px',
    paddingLeft: '12px',
    fontSize: '16px',
    whiteSpace: 'nowrap',
    borderRight: '1px solid #eee',
    fontFamily: 'Helvetica'
  },
  urlInput: {
    paddingLeft: 8,
    paddingRight: 8,
    width: '300px',
    minHeight: '30px',
    paddingTop: '0',
    paddingBottom: '0',
    fontSize: '15px',
    border: 0,
    boxShadow: 'none',
    outline: 'none',
    backgroundColor: 'white'
  },
  fetchButton: {
    borderLeftWidth: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  editHeadersButton: {
    marginLeft: '30px'
  },

  // Get or Set Query
  queryStringInput: {
    margin: '8px',
    padding: '0px 8px',
    width: '300px',
    minHeight: '30px',
    fontSize: '15px',
    backgroundColor: 'white',
    color: '#333',
    verticalAlign: 'middle',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 8px center',
    border: '1px solid #ddd',
    borderRadius: '5px',
    outline: 'none',
    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.075)'
  },
  queryStringInputFocused: {
    border: '1px solid #51a7e8',
    outline: 'none',
    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.075),0 0 5px rgba(81,167,232,0.5)'
  },
  queryStringInputButtons: {
    display: 'flex',
    flexDirection: 'row',
    margin: '0px 8px 8px 8px'
  },
  copyButton: {
    minWidth: '70px'
  },
  setButton: {
    marginLeft: '8px',
    minWidth: '70px'
  },
  copiedButton: {
    color: '#55b230'
  },

  // Save or Load Query
  crossButton: {
    display: 'block',
    float: 'right',
    fill: '#ccc',
    cursor: 'pointer'
  },
  saveQueryButton: {
    padding: '8px',
    fontSize: '14px',
    display: 'border-box',
    cursor: 'pointer'
  },
  saveQueryButtonLabel: {
    fontWeight: '600'
  },

  // EditHeaderModal
  editHeaderModalContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1000,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: '60px 0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  editHeaderModal: {
    boxShadow: '0 5px 15px rgba(0,0,0,.5)',
    backgroundColor: 'white',
    border: '1px solid rgba(0,0,0,.2)',
    borderRadius: '3px',
    outline: 0,
    padding: '15px 20px',
    width: '50%'
  },
  editModalButtonsWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: '20px'
  },
  editHeaderModalSaveButton: {
    marginLeft: '25px'
  },
  editModalFormItem: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    marginBottom: '3px'
  },
  editModalInputWrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    borderRadius: '3px 0px 0px 3px'
  },
  editModalInput: {
    width: 'calc(50% - 10px)',
    height: '30px',
    backgroundColor: 'transparent',
    fontSize: '14px',
    borderBottom: '1px solid #F0F0F0',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    padding: '10px',
    color: '#505050',
    fontFamily: 'Helvetica',
    boxSizing: 'border-box',
    lineHeight: 'normal',
    margin: '0'
  },
  editModelValueInput: {
    marginLeft: '10px'
  },
  editModelKeyInput: {
    marginRight: '10px'
  },
  editModalFormItemDelete: {
    width: '30px',
    height: '30px',
    backgroundColor: '#FAFAFA',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fill: '#B4B4B4',
    cursor: 'pointer',
    borderRadius: '3px',
    marginLeft: '3px'
  },
  editModalFormItemDeleteStub: {
    width: '30px',
    height: '30px',
    marginLeft: '3px',
    backgroundColor: 'transparent'
  },
  editHeaderModelTitle: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 600,
    color: '#333',
    fontFamily: 'Helvetica',
    marginBottom: '10px'
  }
};