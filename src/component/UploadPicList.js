import React ,{Component} from 'react'
import ReactDOM from 'react-dom';
import { Upload, Button, Icon } from 'antd';
import '../css/upload.css'




class UploadPicList extends React.Component {



    render() {
        const fileList = [];


        const props2 = {
            action: '//jsonplaceholder.typicode.com/posts/',
            listType: 'picture',
            defaultFileList: [...fileList],
            className: 'upload-list-inline',

        };

        return (
            <div>

                <Upload {...props2}
                >
                    <Button>
                        <Icon type="upload" /> Upload
                    </Button>
                </Upload>
            </div>
        );
    }
}

/*ReactDOM.render(<UploadPic />, document.getElementById('app'));*/

export default UploadPicList