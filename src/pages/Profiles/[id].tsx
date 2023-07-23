import type { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next";
import { SSGHelper } from "~/server/api/SSGHelper";
import { api } from "~/utils/api";
import ErrorPage from 'next/error'

const ProfilePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ id }) => {
    const { data: profile } = api.profile.getUsingId.useQuery({ id })

    if (profile == null || profile.name == null) return <ErrorPage statusCode={404} />
    return (
        <>
            
            {profile.name}
        </>
    )
}

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export async function getStaticProps(context: GetStaticPropsContext<{ id: string }>) {
    const id = context.params?.id
    if (id == null) {
        return {
            redirect: {
                destination: '/'
            }
        }
    }

    const ssg = SSGHelper()
    await ssg.profile.getUsingId.prefetch({ id })

    return {
        props: {
            trpcState: ssg.dehydrate(),
            id
        }
    }
}

export default ProfilePage