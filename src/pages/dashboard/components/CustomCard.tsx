import { Paper,  Text, Flex , Box} from "@mantine/core"


type CardProps = {
children: React.ReactNode,
 label?: string,
 title: string

}



export default function CustomCard ({children,label, title}:CardProps){




return <><Paper withBorder mih='10rem' maw='20rem'radius="md" p="xs" //key={stat.label}
>
        <Flex direction='column' justify='center'>

 <Text fw={700} size="xl" ta='center' c="var(--mantine-color-gray-7)" tt="uppercase">
              {//stat.stats
              title
              }
            </Text>
              <Box h='100%'>{children}</Box>
            {/* <Text c="dimmed" size="xs" tt="uppercase" fw={700} ta='center'>
              {//stat.label
              label
              }
              
            </Text> */}
           
           
        </Flex>
      </Paper></>

}