type CreateChannelModalProps = {
  isOpen: boolean;
  newChannelName: string;
  onChannelNameChange: (value: string) => void;
  onCancel: () => void;
  onCreate: () => void;
};

const CreateChannelModal = ({
  isOpen,
  newChannelName,
  onChannelNameChange,
  onCancel,
  onCreate,
}: CreateChannelModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div
        className="w-full max-w-md rounded-lg bg-white p-6 text-slate-900 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className="mb-4 text-lg font-semibold">Create a channel</h2>
        <label
          className="mb-2 block text-sm font-medium"
          htmlFor="channel-name"
        >
          Channel name
        </label>
        <input
          id="channel-name"
          type="text"
          value={newChannelName}
          onChange={(event) => onChannelNameChange(event.target.value)}
          className="mb-4 w-full rounded border border-slate-300 px-3 py-2 outline-none focus:border-violet-500"
          placeholder="e.g. design"
        />

        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="rounded px-3 py-2 text-sm hover:bg-slate-100"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            className="rounded bg-violet-600 px-3 py-2 text-sm text-white hover:bg-violet-700"
            onClick={onCreate}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateChannelModal;
