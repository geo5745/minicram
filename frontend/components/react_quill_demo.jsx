import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import mathquill4quill from 'mathquill4quill';
import 'mathquill4quill/mathquill4quill.css';

class QuillDemo extends React.Component {
  reactQuill = React.createRef();

  componentDidMount() {
    const enableMathQuillFormulaAuthoring = mathquill4quill({ Quill });
    enableMathQuillFormulaAuthoring(this.reactQuill.current.editor);
  }

  render() {
    return (
      <ReactQuill
        ref={this.reactQuill}
        modules={{
          formula: true,
          toolbar: [["formula", /* ... other toolbar items here ... */]]
        }}
      />
    );
  }
}


// const QuillDemo = () => {
//   const [value, setValue] = useState('');

//   return (
//     <ReactQuill theme="snow" value={value} onChange={setValue}/>
//   );
// }

export default QuillDemo;