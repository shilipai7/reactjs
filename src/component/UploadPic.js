import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Upload, Icon, Modal, message} from 'antd';
import {Row, Card, Col, Button} from 'antd';
import ReactDOM from 'react-dom';
import '../css/upload.css'


class UploadPic extends React.Component {
    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [],
        showUploadList: true,
    };

    componentWillMount() {

        this.getPicByWorker()
    }

    getPicByWorker = () => {
        const list = [];
        fetch('http://localhost:8082/getAuthenticationPics/3/1')
            .then(response => response.json())
            .then(data => {
                data.map((file, num) => {
                    list.push(file)
                })
                // data就是我们请求的repos
                console.log(list)
                if (list.length !== 0) {
                    this.setState({fileList: list, showRemoveIcon: false})
                }
            });
    }


    handleCancel = () => this.setState({previewVisible: false})

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,

        });

    }

    handleChange = ({fileList}) => {
        this.setState({fileList, showUploadList: true});
        //上传完以后马上刷新 以保证信息完全到数据库
        window.location.reload()
    }

    remove = (file) => {
        console.log(file.uid)
        console.log("url" + file.url)
        console.log("name" + file.name)
        fetch('http://localhost:8082/delete/' + file.uid, {
            method: 'DELETE',
        }).then(response => response.json())
            .catch(error => {
                console.log(error)
            })
            .then(response => {
                console.log(response)
            })


    }

    render() {
        const {previewVisible, previewImage, fileList} = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div style={{marginTop: 20}}>
                <Upload
                    accept="image/*"
                    action="http://localhost:8082/upload"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                    beforeUpload={beforeUpload}
                    multiple={true}
                    onRemove={this.remove}
                >
                    {fileList.length >= 3 ? null : uploadButton}

                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{width: '100%'}} src={previewImage}/>
                </Modal>
            </div>
        );
    }
}

function beforeUpload(file) {
    const isJPGOrPNG = (file.type === 'image/jpeg' || file.type === 'image/png');
    console.log(file.type)
    if (!isJPGOrPNG) {
        message.error('You can only upload JPG OR PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }

    return isJPGOrPNG && isLt2M;
}

export default UploadPic