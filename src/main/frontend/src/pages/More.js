import {Form} from 'react-bootstrap';
import React from 'react'
import Select from 'react-select'
import {Col, Badge, Alert} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import ImageCard from '../ImageCard';

const options1 = [
    { value: '1', label: '전라도' },
    { value: '2', label: '경기도' },
    { value: '3', label: '서울특별시' }
]
const options2 = [
    { value: '1', label: '북구' },
    { value: '2', label: '서구' },
    { value: '3', label: '남구' }
]

function More() {
    return (
        <>
            <div className="nav-solid"></div>
                <div className='option-box-margin'>
                    {/* <h2 className='badge-br'>
                    전국의 여행지를 찾아보세요
                    </h2> */}
                    <Alert variant="light" className='AlertBox'>
                    <Alert.Heading>전국의 여행지를 찾아보세요</Alert.Heading>
                    <hr />
                    <p className="mb-0">
                    <Col md="3"className='option-box'><option className='option-color'>시/도</option><Select  options={options1} /></Col>
                    <Col md="3"className='option-box'><option className='option-color'>시/군/구</option><Select options={options2} /></Col>
                    <div className='GlassIcon'><FontAwesomeIcon icon={faMagnifyingGlass} size="lg" style={{color: "#83a6e2",}} /></div>
                    </p>
                    
                    </Alert>
                    <br/>
                    {/* <div>
                    <Col md="3"className='option-box'><option className='option-color'>시/도</option><Select  options={options1} /></Col>
                    <Col md="3"className='option-box'><option className='option-color'>시/군/구</option><Select options={options2} /></Col>
                    </div> */}
                </div>
            <div className="nav-solid-two"></div>
            
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>
        </>
    )
}

export default More;