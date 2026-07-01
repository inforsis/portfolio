import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import api from '../../api'
import type { FunFact } from '../../types/api'

import cubeLoader from './assets/img/Cube-1s-39px.svg'

import './assets/scss/components/_fun-facts-card.scss'
import './assets/scss/components/_fun-facts-icon.scss'

type FunfactsMode = 'manual' | 'transition'

type SelectedFunfact = {
  id: number
  title: string
}

type ShowFunfactOptions = {
  mode?: FunfactsMode
  afterRead?: () => void
}

type FunfactsContextValue = {
  showFunfact: (options?: ShowFunfactOptions) => void
}

const FunfactsContext = createContext<FunfactsContextValue | null>(null)

const MIN_NAVIGATION_DELAY = 1400
const MAX_NAVIGATION_DELAY = 2800
const CLOSE_DELAY_AFTER_NAVIGATION = 700

function getRandomDelay(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomFunfact(funfacts: FunFact[], currentId?: number): SelectedFunfact | null {
  if (funfacts.length === 0) {
    return null
  }

  const availableFunfacts = funfacts.length > 1
    ? funfacts.filter((funfact) => funfact.id !== currentId)
    : funfacts

  const index = Math.floor(Math.random() * availableFunfacts.length)
  const funfact = availableFunfacts[index]

  return {
    id: funfact.id,
    title: funfact.title,
  }
}

export function useFunfacts() {
  const context = useContext(FunfactsContext)

  if (!context) {
    throw new Error('useFunfacts must be used inside FunfactsProvider')
  }

  return context
}

export function FunfactsProvider({ children }: { children: React.ReactNode }) {
  const [funfacts, setFunfacts] = useState<FunFact[]>([])
  const [activeFunfact, setActiveFunfact] = useState<SelectedFunfact | null>(null)
  const [funfactHistory, setFunfactHistory] = useState<SelectedFunfact[]>([])
  const [activeHistoryIndex, setActiveHistoryIndex] = useState(-1)
  const [mode, setMode] = useState<FunfactsMode>('manual')
  const timersRef = useRef<number[]>([])

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((timer) => {
      window.clearTimeout(timer)
    })
    timersRef.current = []
  }, [])

  useEffect(() => {
    api.get<FunFact[]>('funfacts')
      .then((response) => {
        setFunfacts(response.data)
      })
      .catch(() => {
        setFunfacts([])
      })

    return clearTimers
  }, [clearTimers])

  const hideFunfact = useCallback(() => {
    clearTimers()
    setActiveFunfact(null)
    setFunfactHistory([])
    setActiveHistoryIndex(-1)
  }, [clearTimers])

  const showNextFunfact = useCallback(() => {
    const selectedFunfact = getRandomFunfact(funfacts, activeFunfact?.id)

    if (!selectedFunfact) {
      return
    }

    setFunfactHistory((currentHistory) => {
      const visibleHistory = currentHistory.slice(0, activeHistoryIndex + 1)

      return [
        ...visibleHistory,
        selectedFunfact,
      ]
    })
    setActiveHistoryIndex((currentIndex) => currentIndex + 1)
    setActiveFunfact(selectedFunfact)
  }, [activeFunfact?.id, activeHistoryIndex, funfacts])

  const showPreviousFunfact = useCallback(() => {
    if (activeHistoryIndex <= 0) {
      return
    }

    const previousIndex = activeHistoryIndex - 1
    const previousFunfact = funfactHistory[previousIndex]

    if (!previousFunfact) {
      return
    }

    setActiveHistoryIndex(previousIndex)
    setActiveFunfact(previousFunfact)
  }, [activeHistoryIndex, funfactHistory])

  const showFunfact = useCallback((options: ShowFunfactOptions = {}) => {
    const selectedFunfact = getRandomFunfact(funfacts)
    const selectedMode = options.mode ?? 'manual'

    clearTimers()
    setMode(selectedMode)
    setActiveFunfact(selectedFunfact)
    setFunfactHistory(selectedFunfact ? [selectedFunfact] : [])
    setActiveHistoryIndex(selectedFunfact ? 0 : -1)

    if (selectedMode !== 'transition') {
      return
    }

    const navigationDelay = getRandomDelay(MIN_NAVIGATION_DELAY, MAX_NAVIGATION_DELAY)

    const navigationTimer = window.setTimeout(() => {
      options.afterRead?.()
    }, navigationDelay)

    const closeTimer = window.setTimeout(() => {
      setActiveFunfact(null)
    }, navigationDelay + CLOSE_DELAY_AFTER_NAVIGATION)

    timersRef.current = [navigationTimer, closeTimer]
  }, [clearTimers, funfacts])

  useEffect(() => {
    if (!activeFunfact) {
      return
    }

    function handleKeyboard(event: KeyboardEvent) {
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        showNextFunfact()
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        showPreviousFunfact()
      }
    }

    window.addEventListener('keydown', handleKeyboard)

    return () => {
      window.removeEventListener('keydown', handleKeyboard)
    }
  }, [activeFunfact, showNextFunfact, showPreviousFunfact])

  const value = useMemo(() => {
    return {
      showFunfact,
    }
  }, [showFunfact])

  return (
    <FunfactsContext.Provider value={value}>
      {children}

      <div
        id="funFactsCard"
        className={`fun-facts-card animated${activeFunfact ? ' active' : ''}`}
        aria-hidden={!activeFunfact}
        role="status"
        onClick={mode === 'manual' ? hideFunfact : undefined}
      >
        <div className="content" aria-live="polite">
          <img src={cubeLoader} alt="" />

          <h6 className="title">
            some fun fact about me #
            <span id="funFactID">{activeFunfact?.id ?? ''}</span>
          </h6>

          <p
            id="funFacts"
            dangerouslySetInnerHTML={{ __html: activeFunfact?.title ?? '' }}
          />
        </div>
      </div>
    </FunfactsContext.Provider>
  )
}

export function FunfactsIcon() {
  const { showFunfact } = useFunfacts()

  return (
    <button
      type="button"
      className="fun-facts-icon new"
      data-title="fun facts"
      aria-label="Show a random fun fact"
      onClick={() => showFunfact()}
    />
  )
}
