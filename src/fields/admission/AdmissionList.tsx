import { useTheme, useMediaQuery } from '@material-ui/core';
import * as React from 'react';
import { DeleteButton, TextField } from 'react-admin';
import ListView from '../../common/ListView';

export interface AdmissionListProps {}
const AdmissionList: React.FC<AdmissionListProps> = props => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const [showModal, setShowModal] = React.useState<string | boolean>(false);
  const [record] = React.useState<any>();

  console.log(props);

  return (
    <ListView
      showActions={false}
      showModal={showModal}
      setShowModal={setShowModal}
      record={record}
      desc='Add or remove Admissions.'
      {...props}
    >
      <TextField source='name' sortable={false} />
      <TextField label={"Father's Name"} source='fatherName' sortable={false} />
      <TextField
        label='Last School'
        source='schoolLastAttend'
        sortable={false}
      />
      <TextField
        label='Required Class'
        source='admissionRequiredIn'
        sortable={false}
      />
      <TextField source='city' sortable={false} />
      <TextField
        source='submissionFormatedDate'
        sortable={false}
        label='Date'
      />
      <TextField label='Phone' source='contactNo' sortable={false} />
      <TextField label='Comments' source='comments' sortable={false} />
      {/* <GridViewButton
        showDialog={() => setShowModal('edit')}
        setRecord={setRecord}
      /> */}
      {!isSmall && <DeleteButton />}
    </ListView>
  );
};

export default AdmissionList;
