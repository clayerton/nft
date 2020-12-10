import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styles from './index.module.scss';
import { ProductTypes } from '../../redux/projectRedux'
const Component = props => {
  const { getTypeData, getType } = props;
  useEffect(() => {
    getType()
    
  }, [])
  console.log(getTypeData)
  return (
    <div className={styles.project}>
      <div className={styles.search}>
        <input placeholder={'已收录100+ NFT区块链网站'} />
      </div>
      <div className={styles.hotWord}>
        <span>12414</span>
        <span>12414</span>
        <span className={styles.select}>12414</span>

      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  getTypeData: state.project,
});

const mapDispatchToProps = (dispatch) => ({
  getType: (payload) => dispatch({ type: ProductTypes.GET_TYPE, payload }),
  // initBSetX: () => dispatch(initBSet()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Component));
