import { Button,Grid,Header,Icon, Segment, Label } from 'semantic-ui-react'
export default function Task(props) 

{
    const {task , deleteTask} = props
    

    return(
       
        <Grid.Column width={8} className='task-container'>
             <Segment>
            {task.categoryName && (
                <Label color='teal' ribbon='right'>
                    {task.categoryName}
                </Label>
                
            )}

            <Header as="h3" className='header-task'>
                 {task.taskName}   
            </Header>
            <Header as="h5" className='header-task'>
                 {task.idtask}   
            </Header>

            <Grid centered columns={2}>
                <Grid.Column>
                    <Button color='red' onClick={()=>deleteTask(task.idtask)}>
                        <Icon name='remove circle'/>
                        ELIMINAR
                    </Button>
                </Grid.Column>
            </Grid>
            </Segment>
        </Grid.Column>
        
    )
};
