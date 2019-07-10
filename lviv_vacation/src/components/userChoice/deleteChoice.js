


export function handleDelete(id){
    //set state for delete animation
    this.setState(() => {
        return {deleting: true};
      });
    console.log(this.state.deleting);
    setTimeout(()=>this.deleteChoice(id), 1000);
    setTimeout(()=>this.setState(() => {
        return {deleting: false};
      }), 2000);
  }