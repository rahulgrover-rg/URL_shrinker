import * as React from 'react';
import { UrlData } from '../../interface/UrlData';
import FormContainer from '../FormContainer/FormContainer';import axios from 'axios' ;
import { serverUrl } from '../../helpers/Constants';
import DataTable from '../DataTable/DataTable';

interface IContainerProps {
}

const Container: React.FunctionComponent<IContainerProps> = () => {

  const [data,setData] = React.useState<UrlData[]>([]) ;
  const [reload,setReload] = React.useState<boolean>(false) ;

  const fetchTableData = async() => {
     const response = await axios.get(`${serverUrl}/shortUrl`) ;
     console.log("The response from sever is :" ,response) ;
     setData(response.data) ;
     setReload(false) ;
  }

  const updateReload = ():void => {
    setReload(true) ;
  }

  React.useEffect(()=> {
    fetchTableData() ;
  },[reload]) ;

  return (
    <>
        <FormContainer updateReload={updateReload}/>
        <DataTable data={data} updateReload={updateReload}/>
    </>
  );
};

export default Container;
