import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Upload, Icon, Modal, message} from 'antd';
import {Row, Card, Col, Button} from 'antd';
import ReactDOM from 'react-dom';
import '../css/upload.css'

let url = '';

class Avatar extends React.Component {


    componentWillMount() {
        //一加载就查看该用户是否有头像 有就显示 第一个参数是workerId 第二个是图片类型 头像是0
        fetch('http://localhost:8082/getAvatarByWorkerId/3/0')
            .then(response => {
                return response.json()
            })
            .then(json => {
                // return (json.url)
                url = json.url;
                if (url !== null) {
                    this.setState({
                        imageUrl: url
                    })
                }
                console.log("url" + url)
                // data就是我们请求的repos
                // url=data.
            })
    }

    state = {
        loading: false,
    };

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({loading: true});
            return;
        }
        if (info.file.status === 'done') {
            //上传完成以后刷新页面 显示刚才上传的头像
            window.location.reload()
            //上传成功之后再去查
            /*fetch('http://localhost:8082/getAvatarById/3/0')
                .then(response => {
                    return response.json()
                })
                .then(json => {
                    // return (json.url)
                    url = json.url;
                    console.log("url上传之后" + url)

                })
            // Get this url from response in real world.
            //上传成功之后要将刚上传的图片显示
            getBase64(info.file.originFileObj, url => this.setState({
                imageUrl: url,
                loading: false,
            }));*/
        }
    }


    render() {

        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'}/>
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const imageUrl = this.state.imageUrl;
        return (
            <div style={{marginLeft: 300}}>
                <Upload
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="http://localhost:8082/uploadAvatar"
                    beforeUpload={beforeUpload}
                    onChange={this.handleChange}
                >
                    {imageUrl ? <div><img src={imageUrl} alt="avatar" height="120" width="120" /></div> : uploadButton}
                </Upload>
            </div>

        );
    }
}

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));

    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }

    return isJPG && isLt2M;
}

export default Avatar