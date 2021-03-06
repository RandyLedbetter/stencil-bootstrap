import { Component } from '@stencil/core';


@Component({
  tag: 'stb-page-collapses',
  styleUrl: 'collapses.scss'
})
export class StbPageCollapses {

  render() {
    return (
      <div class="pb-4">
        <h1>Collapses</h1>

        <br/>
        <br/>

        <stb-collapse >
          <button class="btn btn-primary" data-toggle="collapse" data-target="#outsideBox" aria-expanded="false" aria-controls="collapseExample">
            Button with outside collapsible
          </button>
        </stb-collapse>



        <br/>
        <br/>

        <stb-collapse accordion={false}>
          <div>
            <p>
              <button class="btn btn-primary" data-toggle="collapse" data-target="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Link with href
              </button>
              <button class="btn btn-primary" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                Button with data-target
              </button>
            </p>
            <div class="collapse" id="collapseExample">
              <div class="card card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
              </div>
            </div>
            <div class="collapse" id="collapseExample2">
              <div class="card card-body">
                Anim2 pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
              </div>
            </div>
          </div>
        </stb-collapse>

        <br/>
        <br/>

        <div class="collapse" id="outsideBox">
          <div class="card card-body">
            Anim2 pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>


        <stb-collapse accordion={true}>
          <div id="accordion" class="accordion">
            <div class="card">
              <div class="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne">
                <h5 class="mb-0">
                  <button class="btn btn-link"  aria-expanded="true" aria-controls="collapseOne">
                    Collapsible Group Item #1
                  </button>
                </h5>
              </div>

              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo">
                <h5 class="mb-0">
                  <button class="btn btn-link collapsed"  aria-expanded="false" aria-controls="collapseTwo">
                    Collapsible Group Item #2
                  </button>
                </h5>
              </div>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree" data-toggle="collapse" data-target="#collapseThree">
                <h5 class="mb-0">
                  <button class="btn btn-link collapsed"  aria-expanded="false" aria-controls="collapseThree">
                    Collapsible Group Item #3
                  </button>
                </h5>
              </div>
              <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </div>
              </div>
            </div>
          </div>
        </stb-collapse>

        <br/>
        <br/>

        <h3>Methods</h3>
        <table class='table'>
          <thead>
          <tr>
            <th>Method</th>
            <th>Description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><code class="highlighter-rouge">document.querySelector('element | class | id').show()</code></td>
            <td>Shows the page that was passed via parameters as element.</td>
          </tr>
          <tr>
            <td><code class="highlighter-rouge">document.querySelector('element | class | id').hide()</code></td>
            <td>Hides the page that was passed via parameters as element.</td>
          </tr>
          </tbody>
        </table>

        <br/>

        <h3>Events</h3>
        <table class='table'>
          <thead>
          <tr>
            <th>Event</th>
            <th>Description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><code class="highlighter-rouge">onShow</code></td>
            <td>This event fires immediately when the show instance method is called.</td>
          </tr>
          <tr>
            <td><code class="highlighter-rouge">onHide</code></td>
            <td>This event is fired when a carousel page has finished being hidden.</td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
