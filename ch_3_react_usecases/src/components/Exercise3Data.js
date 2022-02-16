
import React from 'react'

class Exercise3Data extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(
            (response) => response.json()
        ).then(data => this.setState({data: data}))

    }
    render() {
        return (
                <div className="grid grid-cols-3 gap-4 m-3">
                {this.state.data.map(d=> {
                    return (<figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800" key={d.id}>
                        <div className="pt-6 space-y-4">
                            <figcaption className="font-medium">
                                <div className="text-sky-500 dark:text-sky-400">
                                    {d.name}
                                </div>
                            </figcaption>
                        </div>
                    </figure>)
                })}
                </div>
        )
    }
}

export default Exercise3Data;