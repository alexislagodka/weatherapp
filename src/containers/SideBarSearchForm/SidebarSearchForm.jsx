import React from 'react'
import styles from './SideBarSearchForm.module.scss'

class SideBarSearchForm extends React.Component {
    state = {
      search: '',
      citys: [],
      city: '',
      woeid: ''
    }

    handleInputChange = (event) => {
      const target = event.target
      const value = target.value
      const name = target.name
      this.setState({
        [name]: value
      })
      const request = `https://www.metaweather.com/api/location/search/?query=${value}`
      if (value) {
        fetch(request)
          .then(res => res.json())
          .then(data => {
            this.setState({ citys: data })
          }).catch(function (err) {
            console.warn('Something went wrong.', err)
          })
      }
    }

      handleClickCity = (event) => {
        const city = event.target.name
        const woeid = event.target.id
        this.setState({
          search: city,
          woeid: woeid,
          city: city,
          citys: []
        })
      }

      handleSearch (e) {
        e.preventDefault()
        this.props.onSearch(this.state.city, this.state.woeid)
        this.setState({ search: '' })
      }

      render () {
        return (
          <div className={styles.sidebarSearchForm} id='sidebarSearchForm'>
            <div className={styles.quitButtonContainer}>
              <button className={styles.quitButton} onClick={this.props.close}>
                <p>X</p>
              </button>
            </div>
            <form className={styles.searchForm} autoComplete='off'>
              <input className={styles.searchInput} type='text' name='search' value={this.state.search} onInput={this.handleInputChange} onChange={this.handleInputChange} />
              {
                    this.state.woeid === ''
                      ? ''
                      : <button className={styles.searchButton} name='search' onClick={e => this.handleSearch(e)}>
                        <p>Search</p>
                      </button>
                }

            </form>
            {
                this.state.citys.length !== 0 && <div className={styles.searchResults}>
                  {
                    this.state.citys.map((city, index) => (
                      <div className={styles.searchResult}>
                        <button className={styles.searchResultButton} key={index} name={city.title} id={city.woeid} onClick={this.handleClickCity}>
                          <p>{city.title}</p>
                          <p>{'>'}</p>
                        </button>
                      </div>
                    ))
                }
                                                 </div>
            }

          </div>
        )
      }
}

export default SideBarSearchForm
