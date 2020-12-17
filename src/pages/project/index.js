import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Search from '../../assets/search.png';
import { ProductTypes } from '../../redux/projectRedux';
import styles from './index.module.scss';
const Component = props => {
  const { typeData, productList, getHome, getSearch, getType, getProduct } = props;
  const [selId, setSelId] = useState(null);
  const [value, setValue] = useState(null)
  useEffect(() => {
    getType()
    getHome()
  }, [])
  const handleType = (id) => {
    setSelId(id);
    if (id === null) {
      getHome()
      return;
    }
    getProduct({ type_id: id })
  }
  const handleSearch = () => {
    getSearch({ keyword: value })
  }
  const enterPressed = (e) => {
    if (e.nativeEvent.keyCode === 13) {
      getSearch({ keyword: value })
    }
  }
  return (
    <div className={styles.project}>
      <div className={styles.search}>
        <input onKeyPress={enterPressed}
          onChange={(e) => setValue(e.target.value)} value={value} placeholder={'已收录100+ NFT区块链网站'} />
        <img onClick={handleSearch} src={Search} />
      </div>
      <div className={styles.hotWord}>
        <span className={selId === null && styles.select || null} onClick={() => handleType(null)}>首页</span>
        {
          typeData && typeData.map((item, index) => {
            return <span className={selId === item.id && styles.select || null} onClick={() => handleType(item.id)} key={index}>{item.type_name}</span>
          })
        }
      </div>
      {
        productList && productList.map((obj, index) => {
          return (
            (Array.isArray(obj.project)) && obj.project.length > 0 &&
            <div className={styles.main} key={obj.id + '_' + index}>
              <p>{obj.type_name}</p>
              <div className={styles.listAll}>
                {
                  obj.project && obj.project.map((v, i) => {
                    return (
                      <a target='_blank' href={v.link} className={styles.list} key={v.id + '_' + obj.id + '_' + index + '_' + i}>
                        <img src={v.icon_value} />
                        <div className={styles.right}>
                          <div className={styles.title}>{v.project_name}</div>
                          <span className={styles.hotTag}>{v.tag_name && v.tag_name[0] && v.tag_name[0].tag_name}</span>
                        </div>
                      </a>
                    )
                  })
                }
              </div>
            </div>
            || null
          )
        })
      }
    </div>
  )
}
const mapStateToProps = (state) => ({
  typeData: state.project.type,
  productList: state.project.product
});

const mapDispatchToProps = (dispatch) => ({
  getType: (payload) => dispatch({ type: ProductTypes.GET_TYPE, payload }),
  getProduct: (payload) => dispatch({ type: ProductTypes.GET_PRODUCT, payload }),
  getHome: (payload) => dispatch({ type: ProductTypes.GET_HOME, payload }),
  getSearch: (payload) => dispatch({ type: ProductTypes.GET_SEARCH, payload }),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Component));