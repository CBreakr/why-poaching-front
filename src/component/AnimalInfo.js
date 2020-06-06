import React from 'react'
import '../AnimalInfo.css';
import Graph from './Graph'



export default class AnimalInfo extends React.Component{
    state={
        animal:[]
    }
    componentDidMount(){
        fetch(`http://localhost:4000/animals/${this.props.routerProps.match.params.id}`)
        .then(resp=>resp.json())
        .then(data=>{
            this.setState({animal:data})
        })

    }

    render(){

        const handleClick=()=>{
            this.setState(prevState=>({
                // class:prevState.class+1
            }))
        }
        return(
            <>
            {/* <span>
            <ul>
               <li className="1"><a href="#about">about</a></li> 
               <li className="2"><a href="#why">why?</a></li> 
               <li className="3"><a href="#help">help</a></li> 
               <li className="4"><a href="#watch">watch</a></li> 
               <li className="5"><a href="#purple">purple</a></li> 

            </ul>
            <div id="container">
                <div id="about"><h1>{this.state.animal.name}</h1></div>
                <div id="why"><h1>{this.state.animal.causes}</h1></div>
                <div id="help"><h1>{this.state.animal.help}</h1></div>
                <div id="watch">
                <iframe src={this.state.animal.video_url}
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                />
                 </div>
                <div id="purple">
                    <Graph/>
                </div>

            </div>
            <button onClick={handleClick}className="btn" >Click me to scroll vertically!</button>

            </span> */}
            <a id="s1" title="Section 1 Anchor" class="s"></a>
<a id="s2" title="Section 2 Anchor" class="s"></a>
<a id="s3" title="Section 3 Anchor" class="s"></a>
<a id="s4" title="Section 4 Anchor" class="s"></a>
<a id="s5" title="Section 5 Anchor" class="s"></a>
<a id="s6" title="Section 6 Anchor" class="s"></a>
<a id="s7" title="Section 7 Anchor" class="s"></a>

<div id="progress"></div>
<div id="background"></div>

<nav class="prevnext" role="presentation">
  <ul>
    <li class="p2"><a href="#s1" accesskey="1" title="Trigger Section 1: This Page Refuses to Use Javascript"></a></li>
    <li class="p3n1 starter"><a href="#s2" accesskey="2" title="Trigger Section 2: :target Pseudo Selector"></a></li>
    <li class="p4n2"><a href="#s3" accesskey="3" title="Trigger Section 3: ~ Swinton"></a></li>
    <li class="p5n3"><a href="#s4" accesskey="4" title="Trigger Section 4: Getting Cray / On Fleek"></a></li>
    <li class="p6n4"><a href="#s5" accesskey="5" title="Trigger Section 5: Accesskeys"></a></li>
    <li class="p7n5"><a href="#s6" accesskey="6" title="Trigger Section 6: Limitations"></a></li>
    <li class="n6"><a href="#s7" accesskey="7" title="Trigger Section 7: Acceptable Use Cases"></a></li>
  </ul>
</nav>

<nav class="thumbs" aria-label="table of contents">
  <ul>
    <li><a href="#s1" title="Thumbnail Trigger Section 1: This Page Refuses to Use Javascript"></a></li>
    <li><a href="#s2" title="Thumbnail Trigger Section 2: :target Pseudo Selector"></a></li>
    <li><a href="#s3" title="Thumbnail Trigger Section 3: ~ Swinton"></a></li>
    <li><a href="#s4" title="Thumbnail Trigger Section 4: Getting Cray / On Fleek"></a></li>
    <li><a href="#s5" title="Thumbnail Trigger Section 5: Accesskeys"></a></li>
    <li><a href="#s6" title="Thumbnail Trigger Section 6: Limitations"></a></li>
    <li><a href="#s7" title="Thumbnail Trigger Section 7: Acceptable Use Cases"></a></li>
  </ul>
</nav>

  
  <section>
    <article>
      <h1>This pen refuses to use Javascript</h1>
      <p>To navigate, you can use the prev/next buttons or the thumbnails to the right. If you prefer to get crazy, you can also use <code>accesskey</code> to jump to sections by using the following keyboard shortcuts:</p>
<pre>
Mac:          alt + ctrl + [1-7]
PC Chrome/IE: alt + [1-7]
PC FF:        alt + shift + [1-7]</pre>
<p class="right"><small><a href="https://www.w3schools.com/tags/att_global_accesskey.asp" target="blank">More on accesskeys</a></small></p>
    </article>
  </section>
  
  <section>
    <article>
      <h1>:target</h1>
      <p>This interface relies on the CSS <code>:target</code> selector. An element is a “target” when its <code>id</code> is hash-referenced in the url.</p>      
      <pre>&lt;a href="http://example.com#section-1"&gt;Section 1&lt;/a&gt;</pre>      
<pre>#section-1:target { 
  display: block; 
}</pre>
      <p>In the above example, whenever the link is clicked, the content with an <code>id</code> of <code>section-1</code> will be displayed.</p>
      <p>CodePen removes the hash from the visible url, but right now you are looking at this pen with <code>#s2</code> as the target. If you were to manually add <code>#s2</code> to the end of this url and reload this pen, you will be taken to this screen instead of the first.</p>      
    </article>
  </section>
  
  <section>
    <article>
      <h1>~ Swinton</h1>
      <p>In CSS, the tilde <code>~</code> is used as the “General sibling combinator”. In English, that means “any following sibling”.</p>
<pre>.a ~ .b {
  display: none;
}</pre>
      <p>This would hide any <code>.b</code> element that comes after an <code>.a</code> and is a sibling.</p>
<pre>
&lt;div class="b"&gt;All good&lt;/div&gt;

&lt;div class="a"&gt;All good&lt;/div&gt;

&lt;div class="x"&gt;
  &lt;div class="b"&gt;Still good&lt;/div&gt;
&lt;/div&gt;

&lt;div class="b"&gt;Hidden&lt;/div&gt;
</pre>
      <p>Only the last <code>.b</code> would be hidden. The first comes before the <code>.a</code>, and the second is not a direct sibling.</p>
    </article>      
  </section>
  
  <section>
    <article>
      <h1>Getting Cray / On Fleek</h1>
      <p>By using <code>:target</code> and <code>~</code> we can do some pretty ridiculous things without touching Javascript. In this pen, we are using <code>:target</code> to trigger different state-related styles.</p>
      <p>At the top of this pen, there are <code>&lt;a&gt;</code> elements. Their only purpose is being used as targets.</p>
<pre>
&lt;a id="s1" class="s"&gt;&lt;/a&gt;
&lt;a id="s2" class="s"&gt;&lt;/a&gt;
...
</pre>
      <p>Using their <code>:target</code> state, we can then select and style anything else on the page.</p>
      <p>Moving the main content area over <code>-300%</code> to reveal this fourth section.</p>
<pre>#s4:target ~ main {
  left: -300%;
}</pre>
      <p>Changing the background color and image:</p>
<pre>#s4:target ~ #background {
  background-image: url(http://lorempixel.com/g/400/150/city/4/);
  background-color: #265273;
}</pre>
      <p>Changing the progress bar width:</p>
<pre>#s4:target ~ #progress {
  width: 50%;
}</pre>
      <p>Styling the fourth thumbnail as active:</p>
<pre>#s4:target ~ .thumbs li:nth-child(4) a {
  opacity: 1;
  width: 80px;
  height: 60px;
  box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.1);
}</pre>
      <p>Showing the appropriate previous link and making it say the right thing:</p>
<pre>#s4:target ~ .prevnext li[class*="p4"] {
  display: block;
  float: left;
}
#s4:target ~ .prevnext li[class*="p4"] a:after {
  content: "Prev";
}</pre>
      <p>Showing the appropriate next link and making it say the right thing:</p>
<pre>#s4:target ~ .prevnext li[class*="n4"] {
  display: block;
  float: right;
}
#s4:target ~ .prevnext li[class*="n4"] a:after {
  content: "Next";
}</pre>
    </article>      
  </section>
  
  <section>
    <article>
      <h1>accesskeys</h1>
      <p>Each of the next/prev navigation items link to each of these spans and have an <code>accesskey</code> attribute. This allows them to be fired using the browser’s <code>accesskey</code> plus whatever key is provided. In this case, we are using the corresponding section number.</p>
<pre>
&lt;a href="#s1" accesskey="1"&gt;&lt;/a&gt;
&lt;a href="#s2" accesskey="2"&gt;&lt;/a&gt;
...
</pre>
      <p>Each browser and operating system use different keyboard shortcuts for <code>accesskey</code>, but the support is suprisingly universal.</p>
<pre>Mac:          alt + ctrl
PC Chrome/IE: alt
PC FF:        alt + shift</pre>
      <p>To switch to the next section, you can hold down your <code>accesskey</code> combination above and then press <code>6</code>.
      <p>There’s more to read about <code>accesskey</code> on <a href="https://www.w3schools.com/tags/att_global_accesskey.asp" target="blank">w3schools</a>.</p>
    </article>      
  </section>
  
  <section>
    <article>
      <h1>Limitations</h1>
      <p>As with any “Who needs JS?” approach, there are more than a few things to consider when doing something like this.</p>

      <h2>Accessibility</h2>
      <p>Confining yourself to CSS makes any interactive experience more inaccessible. There are a handful of ways one could optimize this for screen readers more than I (hardly) have, but it would be a lot of effort for a unsatisfactory result.</p>
      <p>Additionally, since the “prev/next” links are actually new links on each section change, the <code>:focus</code> that occurs when you have tabbed into them disappears because the link is actually disappearing. You need to re-tab in every time. Blech. No one likes excess tab unless we’re talking about <a href="https://en.wikipedia.org/wiki/Tab_(soft_drink)" title="Wikipedia: Tab Soda" target="blank">the soda</a>.</p>      
      
      <h2>History</h2>
      <p>Each hashchange is going to be recorded in the browser history without some Javascript intervention. This can go either way as a pro or con. For something like this, it may be a pro.</p>
      
      <h2>Scalability</h2>
      <p>All ths content is being dumped into the DOM at once. At a certain size, this approach might not make a lot of sense. In theory, you could get around some of this with some smart selectors and <code>display: none;</code>, but depending on the complexity of your content, you may still have some load time issues. Dynamically loading content with Javascript is a often a very, very good thing.</p>
    </article>      
  </section>
  
  <section>
    <article>
      <h1>Acceptable Use Cases</h1>
      <p>There are some cases where something this inaccessible is technically ok. This could make sense in an environment where it is only being used in a visual setting such as a live presentation or internal documentation tool.</p>
      <p>Most importantly, it can be used as a way to show that CSS is very powerful, but can also be very limiting—depending on the need.</p>
      <p>If you liked this, you may enjoy more of my bogus CSS in my <a href="https://codepen.io/collection/DzxNzN/" target="blank">No JS Collection</a>.</p>
    </article>      
  </section>
  
</main>
            
            </>
            
        )
    }
}