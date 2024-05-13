
function customRender(reactElement , container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.Children
    // domElement.setAttribute('href' , reactElement.props.href)
    // domElement.setAttribute('target' , reactElement.props.target)

    // container.appendChild(domElement)
    

   // setting the element 
   const domElement =  document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.Children
   for (const prop in reactElement.props) {
    if(prop === 'Children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
   }
   container.appendChild(domElement)
}

// creating react element  having type and properties
const reactElement ={
    type: 'a',
    props:{
        href:"https://google.com",
        target: '_blank'
    },
    Children: 'click me to visit google'
}

//container root element 
const mainContainer = document.querySelector('#root')

customRender (reactElement,mainContainer)