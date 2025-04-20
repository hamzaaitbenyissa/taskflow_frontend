/**
 * This file defines the Home component, which redirects to the tasks page.
 */

import { redirect } from 'next/navigation'

/**
 * Home component that redirects to the tasks page.
 *
 * @returns The Home component that performs the redirection.
 */
export default function Home() {
  redirect('/tasks')
}
