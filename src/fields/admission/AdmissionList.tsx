import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import * as React from 'react';
import { DeleteButton, TextField } from 'react-admin';
import GridViewButton from '../../common/GridViewButton';
import ListView from '../../common/ListView';

export interface AdmissionListProps {}
const AdmissionList: React.FC<AdmissionListProps> = props => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const [showModal, setShowModal] = React.useState<string | boolean>(false);
  const [record, setRecord] = React.useState<any>();

  console.log(props);

  return (
    <ListView
      showModal={showModal}
      setShowModal={setShowModal}
      record={record}
      desc='Add or remove Admissions.'
      {...props}
    >
      <TextField source='name' sortable={false} />
      <TextField source='fatherName' sortable={false} />
      <TextField source='schoolLastAttend' sortable={false} />
      <TextField source='admissionRequiredIn' sortable={false} />
      <TextField source='city' sortable={false} />
      <TextField source='contactNo' sortable={false} />
      {/* <GridViewButton
        showDialog={() => setShowModal('edit')}
        setRecord={setRecord}
      /> */}
      {/* {!isSmall && <DeleteButton />} */}
    </ListView>
  );
};

export default AdmissionList;
