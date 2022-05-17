import React from 'react'


function Webpage
  () {
  return (
    <html>
      <header>
        <title>My HTML Webpage</title>

      </header>

      <body>

        <div className='container border border-2 border-dark text-center bg-light'>
          <h1 className=''>Web Page</h1>
          {/* Column List */}
          <div class="row  bg-light text-center">
            <div class="col-lg-8 border" >
              Product
              <div class="row">
                <div class="col"><h6>Column</h6>
                  <p>Value</p>
                </div>
                <div class="col"><h6>Column</h6>
                  <p>Value</p></div>
                <div class="col"><h6>Column</h6>
                  <p>Value</p></div>
                <div class="col"><h6>Column</h6>
                  <p>Value</p></div>
                <div class="col"><h6>Column</h6>
                  <p>Value</p>
                </div>
                <div class="col"><h6>Column</h6>
                  <p>Value</p></div>
                <div class="col"><h6>Column</h6>
                  <p>Value</p></div>
                <div class="col"><h6>Column</h6>
                  <p>Value</p></div>
              </div></div>

            <div class="col border">
              $$$
              <div class="row">
                <div class="col"><h6>Column</h6>
                  <p>Value</p>
                </div>
                <div class="col"><h6>Column</h6>
                  <p>Value</p></div>
                <div class="col"><h6>Column</h6>
                  <p>Value</p></div>
                <div class="col"><h6>Column</h6>
                  <p>Value</p></div>
              </div>
            </div>
          </div>
          {/* ----------------- */}
          <br />
          <img alt="this_is_my_image" className="container" height="cover" width="cover" src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=6fe0ebd22151102996062fa1287f824c" />

          <p>Lorem20</p>
          <ul>
            <li>List Item 1</li>
            <li>List Item 1</li>
            <li>List Item 1</li>
          </ul>

          <table>
            <th > Main Header
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3</th>
              <th>Header 4</th>
              <th>Header 5</th>
              <th>Header 6</th>
              <th>Header 7</th>
              <th>Header 8</th>
            </th>
            <th> Main Header
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3</th>
              <th>Header 4</th>
            </th>

            <tbody>
              <td>
                <td>Col</td>
                <td>Col</td>
                <td>Col</td>
                <td>Col</td>
                <td>Col</td>
                <td>Col</td>
                <td>Col</td>
                <td>Col</td>
              </td>
              <td>
                <td>Col</td>
                <td>Col</td>
                <td>Col</td>
                <td>Col</td>
              </td>

            </tbody>
          </table>
        </div>


      </body>


    </html>
  )
}

export default Webpage


