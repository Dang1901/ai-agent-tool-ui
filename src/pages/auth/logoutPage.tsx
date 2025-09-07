import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Flex, Card, Spinner, Text, Heading } from '@radix-ui/themes'
import { useLogout } from '@applications/mutations/auth'

export default function LogoutPage() {
  const nav = useNavigate()
  const logout = useLogout()

  useEffect(() => {
    logout.mutate(undefined, {
      onSettled: () => nav('/login', { replace: true }),
    })
  }, [])

  return (
    <Flex align="center" justify="center" style={{ minHeight: '100vh' }}>
      <Card size="3">
        <Flex direction="column" align="center" gap="3">
          <Spinner size="3" />
          <Heading size="4">Đang đăng xuất</Heading>
          <Text size="2" color="gray">Vui lòng chờ trong giây lát…</Text>
        </Flex>
      </Card>
    </Flex>
  )
}
