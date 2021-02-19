// import React, { Component } from 'react'
// import Chart from 'react-apexcharts'
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom'
// import PropTypes from 'prop-types';

// import { dataTransaction } from '../../_action/data'
// import { getSmartcard } from '../../_action/TvsubAction'
// import { getTransaction } from '../../_action/airtime'
// import { getElectricTransaction } from '../../_action/electric'

// class PopCharts extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {
//         chart: {
//           id: 'apexchart-example'
//         },
//         xaxis: {
//           categories: ['airtime', 'data', 'electric', 'tv-sub']
//         }
//       },
//       series: [{
//         name: 'series-1',
//         data: []
//       }]
//     }
//   }

//   static propTypes = {
//     authUser: PropTypes.object.isRequired,
//   }

//   componentDidMount() {
//     this.airtimeTransaction()
//     //console.log(nextProps)
//     /*try {
//         const { series } = this.state
//         //const transaction = this.props.transaction.transaction;
//         const transaction = Object.keys(this.props.transaction.transaction).filter(function(el){return !(+el % 1) && +el>=0 && +el < Math.pow(2,32) ;}).length
//         const data = this.props.data.data
//         const electric = this.props.electric.electric
//         const tvsub = this.props.tvsub.smartCards
//         console.log(transaction)

//         if(transaction > 0 || data > 0 || electric > 0 || tvsub > 0) {
//            series.map(alldata => alldata.data.push(transaction, data.length, electric.length, tvsub.length))
//            console.log(series)
//         } else {
//            series.map(alldata => alldata.data.push(transaction, data.length, electric.length, tvsub.length))
//            console.log(series)
//         }
//     }catch(err) {
//         console.log(err)
//     }

//     //console.log(transaction)
//     //series.map(alldata => alldata.data.push(transaction.length, data.length, electric.length, tvsub.length))
//     */
//   }

//     airtimeTransaction = async () => {
//         return await getTransaction(this.props.authUser.token)
//         try {

//         }catch(err) {
//           console.log(err)
//         }
//     }

//       handleSubmit = async e => {
//         e.preventDefault();
//         const { name, meter, select, phone, email, amount, service, transactionId } = this.state

//         try {
//           const result = await this.verifyNumber()
//           console.log(result)
//         }
//         catch(err) {
//           this.setState({ msg: err.response.data.msg })
//         }
//       }

//     render() {
//     /*const { series } = this.state
//     const transaction = this.props.transaction.transaction.length === 0 ? "" : this.props.transaction.transaction
//     const data = this.props.data.data
//     const electric = this.props.electric.electric
//     const tvsub = this.props.tvsub.smartCards
//     //const { user } = this.props.authUser.user
//     series.map(alldata => alldata.data.push(transaction.length, data.length, electric.length, tvsub.length))
//     console.log(series)*/
//     return (
//       // <Chart options={this.state.options} series={this.state.series} type="bar" width={500} height={320} />
//       <div>hello</div>
//     )
//   }
// }

// const mapStateToProps = state => ({
//   transaction: state.transaction,
//   data: state.data,
//   electric: state.electric,
//   tvsub: state.tvsub,
//   authUser: state.authUser,
// })

// export default connect(mapStateToProps, { getTransaction })(PopCharts)

import React, { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'
// import PerfectScrollbar from "react-perfect-scrollbar";
import { useSelector } from 'react-redux'

const Charts = () => {
  const [values, setValues] = useState({
    series: [
      {
        name: 'Transactions',
        data: [],
      },
    ],
  })

  const options = {
    chart: {
      type: 'line',
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      type: 'datetime',
    },
    stroke: {
      curve: 'smooth',
    },
  }

  const transactions = useSelector((state) => state.transaction.transaction)

  useEffect(() => {
    if (!transactions) return

    const series = transactions.map((t) => {
      return {
        name: 'Transactions',
        data: [
          // {
          //   x: t.request.timestamp,
          //   y: t.request.amount,
          // },
          {
            x: t.date,
            y: t.amount,
          },
        ],
      }
    })

    setValues({ series })
  }, [transactions])

  return (
    <>
      {/* <PerfectScrollbar> */}
      {values.series.map((all, index) =>
        all.data.length === 0 ? <h2 key={index}>PENDING...</h2> : '',
      )}
      <div className="p-4 bg-white container">
        <h3 className="text-center">Transaction chart</h3>
        <Chart
          options={options}
          series={values.series}
          type="line"
          width="100%"
          height={300}
        />
      </div>
      {/* </PerfectScrollbar> */}
    </>
  )
}

export default Charts
