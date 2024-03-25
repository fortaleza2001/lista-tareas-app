import { Select,Input,Button,Grid,Header,Icon } from 'semantic-ui-react'
import {useState} from 'react'
const options = [{key:"deporte",text:"Deporte",value:"deporte"},
                {key:"casa",text:"Casa",value:"casa"},
                {key:"oficina",text:"Oficina",value:"oficina"},
                {key:"otra",text:"Otra",value:"otra"}
                ]
export default function InputTask() {

    const [task, setTask] = useState({
        idtask:"",
        taskName:"",
        categoryName:""
    })

    const [error,setError] = useState(false)

    const onChangeTask = (e) => {
        console.log("Escribiendo:", e.target.value);
        // Actualizar el estado de la tarea con el nuevo valor
        setTask({ ...task, taskName: e.target.value });
    };
    return (
        <>
        <Grid centered columns={3}>
            <Input type='text' >
            <Input size='small' placeholder="Escribe tu tarea" name="taskName" value={task.taskName} onChange={onChangeTask} />
            </Input>  
            <Select compact options={options} className='select-form-task' name="categoryTask" placeholder="categoria"  value={task.categoryName}/> 
            <Button type='submit' color='violet'>Añadir tarea</Button>  
        </Grid>

        {error && (
        <Grid centered>
            <Header as="h4" color="red" className='alert-error-form'>
                <Icon name='close'></Icon>
                <Header.Content>La tarea es obligatoria</Header.Content>
                <Icon name='close'></Icon>
            </Header>
        </Grid>)}
        </>
    )
    
};
