import React from 'react';

const TransactionHistory = () => {
  return (
    <>
      <section className='mt-5 pt-5'>
        <div className='container d-flex'>
          <div className='card-text'>Transaction History</div>
          <div className='seeAll mx-auto text-end bg-info p-1 rounded text-light'>see all</div>
        </div>

        <div className='tableContainer text-center'>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">S/N</th>
                <th scope="col">Network</th>
                <th scope="col">Type</th>
                <th scope="col">Amount</th>
                <th scope="col">Category</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default TransactionHistory;
