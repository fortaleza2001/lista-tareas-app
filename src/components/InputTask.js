import { Select,Input,Button,Grid,Header,Icon } from 'semantic-ui-react'
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
const options = [{key:"deporte",text:"Deporte",value:"deporte"},
                {key:"casa",text:"Casa",value:"casa"},
                {key:"oficina",text:"Oficina",value:"oficina"},
                {key:"otra",text:"Otra",value:"otra"}
                ]
export default function InputTask(props) {

    const {createTask} = props
    const [task, setTask] = useState({
        idtask:"",
        taskName:"",
        categoryName:""
    })

    

    const [error,setError] = useState(false)

    const onChangeTask = (e) => {
       
        setTask({ ...task, taskName: e.target.value });
        
    };

    
    const onChangeCetegoryTask = (e,data) => {
       
        setTask({ ...task, categoryName: data.value });
      
    };

    


    const onSubmitTask = (e)=>{
        e.preventDefault()

        if(task.taskName.trim()==="")
        {
            setError(true)
            return
        }

        setError(false)
        

        task.idtask = uuidv4()

        createTask(task);

        //Limpiar tarea y formulario
        setTask({
            idtask:"",
            taskName:"",
            categoryName:""
        })
        
    }
    return (
        <>
        <Grid centered columns={3}>
            <Input type='text' >
            <Input size='small' placeholder="Escribe tu tarea" name="taskName" value={task.taskName} onChange={onChangeTask} />
            </Input>  
            <Select compact options={options} className='select-form-task' name="categoryName" placeholder="categoria"  value={task.categoryName} onChange={onChangeCetegoryTask}/> 
            <Button type='submit' color='violet' onClick={onSubmitTask}>Añadir tarea</Button>  
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
