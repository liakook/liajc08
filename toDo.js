import React from 'react'

class Todo extends React.Component{  
    // state = {add : ''}
    // addBtn = () => {
    //     var klikAdd = this.refs.input.value
    //     this.setState({add : klikAdd})
    // }

    // hapusBtn = () => {
    //     this.setState({hasil : this.state.isiAdd - 1})
    // }

    // render(){
    //     return(
    //         <div className='container' style={{marginTop:'20px',height:'300px'}}>
                
    //             <div className='row'>
    //                 <div className='col-md-2'>
    //                     <input placeholder={ 'What will you do?' } ref='input' onClick={this.addBtn}/> 
    //                 </div>

    //                 <div className='col-md-2'>
    //                     <input type="button" value="Add" onClick={this.Todo}/>
    //                 </div>
    //                 <div className='col-ms-6'>
    //                     <table className="table table-hover" scope="row" onClick={this.hasil}>
    //                     </table>
    //                     <input type='button' value='Hapus Aku' onClick={this.hapusBtn}/>
    //                 </div>
    //             </div>
    //         </div>
        
    //     )
    // }

    constructor(){
        super();
        this.state = {user:' '};
        }

        add(){
        this.setState({user: this.refs.aktifitas.value});
        }

        hapus(){
        this.setState({user: (this.refs.aktifitas.value) - 1})
        }


        render() {
        return (
        <div className='row' style={{marginTop:'20px', height:'300px'}}>
            
            <div className='col-md-2' style={{marginTop:'30px', height:'50px'}}>
                <input placeholder='What will you do?' ref="aktifitas" type="text" />
            </div>
            <div className='col-md-2' style={{marginTop:'30px', height:'50px'}}>
                <button onClick={()=>{this.add();}}>Add</button>
            </div>

            <div className='col-md-2' style={{marginTop:'30px', height:'50px'}}>
        
                <table className='table table-hover'>
                
                    <td> {this.state.user}</td>
                    <td scope="row justify-content-left" ></td>
                    
                </table>
                <button onClick={()=>{this.hapus();}}>Hapus Aku</button>
            </div>
        </div>
        
        );
        }
}

export default Todo