import Child from './Child';

const Parent = () =>{

    const clickMe = () => {
        console.log('Hello')
    }  

    return <Child color = {'red'} age = {25} clickHnadler = {clickMe}/>
}
export default Parent