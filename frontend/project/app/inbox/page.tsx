import Conversation from "../components/inbox/conversation";

const InboxPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1 className="mt-6 mb-2 text-2xl">Inbox</h1> 

            <Conversation />
            <Conversation />
            <Conversation />
        </main>
    )
}

export default InboxPage;