import React from 'react';
import Card from 'react-bootstrap/Card';
import hanno from '../images/package.png';
import Button from 'react-bootstrap/Button';

function Pcard(props){
    // import pic_ from props.pro.pic_url;
    const responsibilities = props.pro.pro_list;
    const list_duty = responsibilities.map((duty)=> 
    <p className="card_list" >{duty}</p>
    );
    return(
        <div className="f1_container col-lg-4 col-sm-12  col-md-6 hanno">
        <div className="f1_card" className="shadow">
            <Card>
                <Card.Title>
                <a href={props.pro.url} target="_blank">
                            {props.pro.name}
                                <img src={props.pro.pic_url} alt=""
                                    className="img_thumb" />
                        </a> <br></br>
                </Card.Title>
                <Card.Text>
                <p className="card_list" ><strong>{props.pro.intro}</strong></p>
                {list_duty}
                <p className="card_list" ><strong>Skills:</strong></p>
                <p className="card_list" >{props.pro.tags}</p>
                <p className="card_list" >
                    <a href={"/detail/" + props.pro.link}>
                    <Button variant="outline-primary">
                        Quick View
                    </Button>
                    </a>
                </p>
                </Card.Text>
            </Card>
        </div>
    </div>

    );
}
export default Pcard;