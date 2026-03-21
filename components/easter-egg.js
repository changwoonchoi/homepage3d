import { useEffect } from 'react'
import { useToast } from '@chakra-ui/react'

const KONAMI = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'
]

const CONSOLE_ART = `
%c
  ██████╗██╗  ██╗ █████╗ ███╗   ██╗ ██████╗ ██╗    ██╗ ██████╗  ██████╗ ███╗   ██╗
 ██╔════╝██║  ██║██╔══██╗████╗  ██║██╔════╝ ██║    ██║██╔═══██╗██╔═══██╗████╗  ██║
 ██║     ███████║███████║██╔██╗ ██║██║  ███╗██║ █╗ ██║██║   ██║██║   ██║██╔██╗ ██║
 ██║     ██╔══██║██╔══██║██║╚██╗██║██║   ██║██║███╗██║██║   ██║██║   ██║██║╚██╗██║
 ╚██████╗██║  ██║██║  ██║██║ ╚████║╚██████╔╝╚███╔███╔╝╚██████╔╝╚██████╔╝██║ ╚████║
  ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝  ╚══╝╚══╝  ╚═════╝  ╚═════╝╚═╝  ╚═══╝
`

const CONSOLE_MESSAGE = `%c
  👋 Hey, you opened DevTools — respect.
  I'm Changwoon, a researcher in 3D vision & graphics.
  If you're curious about how this site was built, check the source:
  https://github.com/changwoonchoi/homepage3d

  P.S. Try the Konami code on the page 👾
`

const useEasterEgg = () => {
  const toast = useToast()

  useEffect(() => {
    // Console message
    console.log(CONSOLE_ART, 'color: #88C0D0; font-weight: bold;')
    console.log(CONSOLE_MESSAGE, 'color: #A3BE8C; font-size: 13px;')

    // Konami code listener
    let sequence = []

    const handleKey = (e) => {
      sequence.push(e.key)
      sequence = sequence.slice(-KONAMI.length)

      if (sequence.join(',') === KONAMI.join(',')) {
        toast({
          position: 'top',
          duration: 6000,
          isClosable: true,
          render: () => (
            <div style={{
              background: 'linear-gradient(135deg, #2E3440, #3B4252)',
              border: '1px solid #88C0D0',
              borderRadius: '12px',
              padding: '16px 20px',
              color: '#ECEFF4',
              fontFamily: 'monospace',
              textAlign: 'center',
              boxShadow: '0 4px 24px rgba(0,0,0,0.4)'
            }}>
              <div style={{ fontSize: '28px', marginBottom: '6px' }}>👾 +30 lives</div>
              <div style={{ fontSize: '14px', color: '#88C0D0' }}>Konami code activated!</div>
              <div style={{ fontSize: '12px', color: '#81A1C1', marginTop: '4px' }}>
                Now go publish more papers.
              </div>
            </div>
          )
        })
        sequence = []
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [toast])
}

const EasterEgg = () => {
  useEasterEgg()
  return null
}

export default EasterEgg
