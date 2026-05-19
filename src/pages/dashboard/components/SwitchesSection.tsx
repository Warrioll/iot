import {  SimpleGrid, Flex, Button } from '@mantine/core';
import CardWithSwitch from './CardWithSwitch';
import CustomCard from './CustomCard';
import { useState, useEffect } from 'react';
import { putSwitchMode } from '@/api/switch';
import toast from 'react-hot-toast';



export default function SwitchesSection() {



 

  return <Flex justify='center'><SimpleGrid m='xl' maw='80rem'w='100%' cols={{ base: 1, sm: 3 }}>
    <CardWithSwitch title='led 1' switchId={1} />
    <CardWithSwitch  title='led 2' switchId={2} />
    <CustomCard title='ESP connection' label='Chceck connection with device' >  <Flex w='100%' h='5rem' align='center' justify='center' px='xl'py='sm'><Button>Check connection</Button></Flex></CustomCard>
    </SimpleGrid></Flex>;
}