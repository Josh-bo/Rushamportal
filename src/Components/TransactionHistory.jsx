import React from 'react';

const TransactionHistory = () => {
  return (
    <>
        <section className='mt-5 pt-5'>
            <div className='container d-flex'>
              <div className='card-text'>Transaction History</div>
              <div className='mx-auto text-end bg-info p-1 rounded text-light'>see all</div>
            </div>

            <table className='table mt-5 table-bordered text-center'>
              <tr>
                <th>Type</th>
                <th>Number</th>
                <th>Amount</th>
                <th>Network</th>
                <th>Time</th>
                <th>Date</th>
              </tr>

              <tr>
                <td>SME</td>
                <td>09074167313</td>
                <td>1GB</td>
                <td>AirTel</td>
                <td>3 hours ago</td>
                <td>3 - 06 - 2023</td>
              </tr>

              <tr>
                <td>Corporate</td>
                <td>07032276967</td>
                <td>2GB</td>
                <td>MTN</td>
                <td>1 hours ago</td>
                <td>4 - 06 - 2023</td>
              </tr>

              <tr>
                <td>DG</td>
                <td>0704534467</td>
                <td>8GB</td>
                <td>GLO</td>
                <td>9 hours ago</td>
                <td>5 - 06 - 2023</td>
              </tr>
            </table>
          </section>
    </>
  );
}

export default TransactionHistory;
