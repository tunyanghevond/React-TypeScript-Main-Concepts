
interface ChildProps  {
color:string;
age:number;
clickHnadler:() => void;

}
export const ChildFC = ({color,age,clickHnadler}:ChildProps) => {
return <div>Hi there! {color} {age}
<button onClick={clickHnadler}>Click Me!</button>
</div>    
}


const Child: React.FC<ChildProps> = ({color}) => {
return <div>Heloo {color}</div>
}
export default Child;