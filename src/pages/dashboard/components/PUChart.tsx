import { AreaChart } from '@mantine/charts';
import { Box, Button, Flex, Input, Paper } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { getPowerUsageData } from '@/api/powerUsage';
import { useEffect, useState } from 'react';
import { RefreshCw } from 'lucide-react';
import toast from 'react-hot-toast';

export const data = [
  {
    date: 'Martttttttttttttttttttttttttmcyliv 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];


export default function PUChart(){

    const [puData, setPuData] = useState<{value: number, time: string }[]>([]);

    const getDataForChart = async ()=>{
      
        toast.promise(  async ()=>{
           const data = await getPowerUsageData(new Date(Date.now() - 168 * 60 * 60 * 1000), new Date(Date.now()))
            setPuData(data)
        },
      {
        loading:  `Refreshing...` ,
        success:  <b>Refreshed succesfully!</b>,
        error:   ()=>{
            return  <b>Could not refresh</b> 

        }
      } )
    }
    return (<Box>
      <Paper  m='xl' mx='10rem'  px='5rem'  mb='md' withBorder p='md'>
        <Flex justify='space-between'align='center' >
        <Flex>
          <Flex align='center' mx='lg'><Input.Label mr='sm'>From</Input.Label><DateTimePicker  w='10rem' variant='filled' withSeconds  placeholder="Pick start date" /></Flex>
           <Flex align='center' mx='lg'><Input.Label mr='sm'>To</Input.Label> <DateTimePicker w='10rem' variant='filled'  withSeconds  placeholder="Pick end date" /></Flex>
        </Flex> 

        <Button variant='light' onClick={getDataForChart} leftSection={<RefreshCw color="var(--mantine-color-lime-6)" size={18} strokeWidth={2.75} />}>Refresh</Button>
      </Flex>
      </Paper>
      
       
         <Box m='xl'px='xl' pt='md' pr='5rem'>
  
      <AreaChart
            h={300}
            data={puData}
            dataKey="time"
            series={[
              { name: 'value', color: 'lime.6' },
            
            ]}
            xAxisProps={{interval : 'preserveStartEnd', minTickGap: 35,}}
            curveType="linear"
            tickLine="xy"
            gridAxis="xy"
          yAxisProps={{ domain: [2800, 3300] }}
    /></Box>
    </Box>)
}