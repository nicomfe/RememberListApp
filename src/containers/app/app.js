// import React from 'react'
// import { connect } from 'react-redux'
//
// import ItemForm from '../../components/items/form/ItemForm'
// import { addItem } from '../../actions/items'
// import { getAllItems } from '../../selectors/items'
//
// class App extends React.Component {
//   render() {
//     const { dispatchAddItem, items } = this.props
//     return <ItemForm dispatchAddItem={dispatchAddItem} items={items} />
//   }
// }
//
// const mapDispatchToProps = (dispatch) => ({
//   dispatchAddItem: (item) => { dispatch(addItem(item)) },
// })
//
// const mapStateToProps = (state) => ({
//   items: getAllItems(state),
// })
//
// export default connect(mapStateToProps, mapDispatchToProps)(App)
