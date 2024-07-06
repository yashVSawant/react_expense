import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from './Card';
function Expense(props){
    return(
        <Card className="expenses">
            {props.expenses.map((expense) => {
            return (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                date={expense.date}
                price={expense.price}
            ></ExpenseItem>
            );
        })}
        </Card>
    )
} 

export default Expense;